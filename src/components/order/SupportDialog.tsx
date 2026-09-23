"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface SupportDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function SupportDialog({
  open,
  onOpenChange,
}: SupportDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Contact support</DialogTitle>

          <DialogDescription>
            Need help with your delivery? Our support team
            can help you with your order.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3">
          <button
            type="button"
            className="w-full cursor-pointer rounded-lg border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-900 transition hover:bg-slate-50"
            onClick={() => {
              onOpenChange(false);
              alert("Contact support selected.");
            }}
          >
            Contact support
          </button>

          <button
            type="button"
            className="w-full cursor-pointer rounded-lg border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-900 transition hover:bg-slate-50"
            onClick={() => {
              onOpenChange(false);
              alert("Delivery issue selected.");
            }}
          >
            Report delivery issue
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}