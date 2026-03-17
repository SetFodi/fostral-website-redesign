import { NextRequest, NextResponse } from 'next/server';
import { verifySessionToken } from '@/lib/auth';
import fs from 'fs';
import path from 'path';

async function saveToGitHub(content: Record<string, unknown>): Promise<boolean> {
  const repo = process.env.GITHUB_REPO;
  const branch = process.env.GITHUB_BRANCH || 'main';
  const token = process.env.GITHUB_TOKEN;
  const filePath = 'src/content/content.json';

  if (!repo || !token) return false;

  const getRes = await fetch(
    `https://api.github.com/repos/${repo}/contents/${filePath}?ref=${branch}`,
    { headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github.v3+json' } },
  );

  let sha: string | undefined;
  if (getRes.ok) {
    const data = await getRes.json();
    sha = data.sha;
  }

  const fileContent = Buffer.from(JSON.stringify(content, null, 2) + '\n').toString('base64');

  const updateRes = await fetch(
    `https://api.github.com/repos/${repo}/contents/${filePath}`,
    {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: 'chore: update website content via CMS',
        content: fileContent,
        ...(sha ? { sha } : {}),
        branch,
      }),
    },
  );

  return updateRes.ok;
}

function saveToFilesystem(content: Record<string, unknown>): boolean {
  try {
    const filePath = path.join(process.cwd(), 'src/content/content.json');
    fs.writeFileSync(filePath, JSON.stringify(content, null, 2) + '\n');
    return true;
  } catch {
    return false;
  }
}

export async function PUT(request: NextRequest) {
  const token = request.cookies.get('admin_token')?.value;
  if (!token || !(await verifySessionToken(token))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { content } = await request.json();

  const useGitHub = process.env.GITHUB_TOKEN && process.env.GITHUB_REPO;
  const saved = useGitHub ? await saveToGitHub(content) : saveToFilesystem(content);

  if (!saved) {
    return NextResponse.json({ error: 'Failed to save content' }, { status: 500 });
  }

  return NextResponse.json({
    success: true,
    method: useGitHub ? 'github' : 'filesystem',
  });
}
