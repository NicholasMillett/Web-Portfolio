'use client';

import { MessageService } from '@/core/application/services/MessageService';

export default function Home() {
  const messageService = new MessageService();
  const message = messageService.getMessage();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-4xl font-bold">
        {message.content}
      </div>
    </main>
  );
}
