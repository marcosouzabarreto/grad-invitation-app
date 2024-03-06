import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name');
  const willAttend = searchParams.get('willAttend');
  try {
    await sql`INSERT INTO guests (name, will_attend) values (${name}, ${willAttend}) RETURNING *`;
  } catch (e) {
    return NextResponse.json({ success: false }, { status: 500 })
  }
  return NextResponse.json({ success: true }, { status: 200 })
}
