'use client';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";

export default function Post({post}: {post: any}) {
  console.log(post)
  return (
    <Card>
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
        
      </CardHeader>
      <CardContent>
        {post.content}
      </CardContent>
      {/* TODO: Include author info */}
      <CardFooter>{post.author.name}</CardFooter>
    </Card>
  )
}
