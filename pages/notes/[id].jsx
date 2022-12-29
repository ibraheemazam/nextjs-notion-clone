import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Page () {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <h1>Note: {id}</h1>

      <Link href="/notes">
        <a>Notes</a>
      </Link>
    </>
  )
}