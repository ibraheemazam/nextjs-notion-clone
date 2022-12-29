import React from 'react';
import { useRouter } from 'next/router';

export default function Test () {
  const router = useRouter();
  const { thang } = router.query;
  console.log(thang)

  return (
    <div>testing</div>
  )
}