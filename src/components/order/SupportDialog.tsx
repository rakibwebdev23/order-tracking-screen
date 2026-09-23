"use client";

import { useEffect, useState } from "react";
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

type SupportMode = "choose" | "contact" | "report" | "done";

export default function SupportDialog({ open, onOpenChange }: SupportDialogProps) {
  const [mode, setMode] = useState<SupportMode>("choose");
  const [message, setMessage] = useState("");
  const [reported, setReported] = useState(false);

  useEffect(() => {
    if (!open) {
      setMode("choose");
      setMessage("");
      setReported(false);
    }
  }, [open]);

  const isReport = mode === "report" || (mode === "done" && reported);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="support-dialog bg-white sm:max-w-md">
        {mode === "done" ? (
          <div className="support-confirmation" role="status">
            <span className="confirmation-mark">✓</span>
            <DialogHeader>
              <DialogTitle>{isReport ? "Report noted" : "Message prepared"}</DialogTitle>
              <DialogDescription>This is a demo experience, so your message has not been sent to a support team.</DialogDescription>
            </DialogHeader>
            <button type="button" className="support-primary" onClick={() => onOpenChange(false)}>Done</button>
          </div>
        ) : mode === "choose" ? (
          <>
            <DialogHeader>
              <DialogTitle>How can we help?</DialogTitle>
              <DialogDescription>Choose what you need help with for this order.</DialogDescription>
            </DialogHeader>
            <div className="support-options">
              <button type="button" onClick={() => setMode("contact")}>
                <strong>Contact support</strong><span>Ask a question about your order</span>
              </button>
              <button type="button" onClick={() => setMode("report")}>
                <strong>Report a delivery issue</strong><span>Tell us what happened</span>
              </button>
            </div>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>{isReport ? "Report a delivery issue" : "Contact support"}</DialogTitle>
              <DialogDescription>{isReport ? "Describe the problem with this delivery." : "Tell us how we can help with your order."}</DialogDescription>
            </DialogHeader>
            <form className="support-form" onSubmit={(event) => { event.preventDefault(); setReported(isReport); setMode("done"); }}>
              <label htmlFor="support-message">{isReport ? "What happened?" : "Your message"}</label>
              <textarea id="support-message" value={message} onChange={(event) => setMessage(event.target.value)} placeholder={isReport ? "Add a few details about the delivery…" : "Write your question…"} required rows={4} />
              <div className="support-form-actions">
                <button type="button" className="support-back" onClick={() => setMode("choose")}>Back</button>
                <button type="submit" className="support-primary">Continue</button>
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
