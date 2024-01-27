'use client';

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Dialog,DialogContent } from './ui/dialog';

type Props = {
  children: React.ReactNode;
  backPath?: string;
  className?: string;
};

function PageModal({ children, backPath, className }: Props) {
  const router = useRouter();

  const handleOpenChange = useCallback(
    (open: boolean) => {
      if (!open) {
        if (backPath) {
          router.push(backPath);
        } else {
          router.back();
        }
      }
    },
    [router, backPath],
  );
  return (
    <Dialog open onOpenChange={handleOpenChange}>
      <DialogContent className={className}>
        <button
          className="absolute right-4 top-4"
          onClick={() => {
            handleOpenChange(false);
          }}
        >
            Close
        </button>
        {children}
      </DialogContent>
    </Dialog>
  );
}
export { PageModal };
