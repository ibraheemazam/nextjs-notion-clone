import React from 'react';
import Link from 'next/link';

export default function Page () {
  return (
    <>
      <h1>Index Page</h1>
      <Link href="/notes">
        <a>
          Click to go to notes, yea?
        </a>
      </Link>
    </>
  )
}