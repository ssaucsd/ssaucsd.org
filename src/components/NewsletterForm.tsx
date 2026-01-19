import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function NewsletterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const GOOGLE_FORM_ACTION_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSeqAfXHr8gYVR7HUYnbBAjY2pYg1641C2p1Fv4uC4YcFWLzLQ/formResponse";
  const ENTRY_NAME = "entry.275972564";
  const ENTRY_EMAIL = "entry.1281671811";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);

    try {
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });
      setIsSuccess(true);
      (event.target as HTMLFormElement).reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  }

  if (isSuccess) {
    return (
      <div className="w-full max-w-md mx-auto mb-12 p-8 bg-primary-foreground/10 rounded-xl border border-primary-foreground/10 text-center animate-in fade-in zoom-in duration-300">
        <h3 className="text-2xl font-bold mb-2">Thanks for joining!</h3>
        <p className="text-primary-foreground/80 mb-4">
          We've received your details.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="text-primary-foreground underline hover:text-secondary transition-colors"
        >
          Submit another response
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto mb-6 p-6 md:p-8 bg-primary-foreground/5 rounded-2xl border border-primary-foreground/10 backdrop-blur-sm shadow-xl">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">Stay Connected</h3>
        <p className="text-sm text-primary-foreground/70">
          Join our mailing list to receive our member newsletter.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-4">
          <div className="relative group">
            <input
              type="text"
              name={ENTRY_NAME}
              placeholder="Name (First and Last)"
              required
              className="w-full px-4 py-3 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:bg-primary-foreground/10 transition-all duration-300"
            />
          </div>
          <div className="relative group">
            <input
              type="email"
              name={ENTRY_EMAIL}
              placeholder="Student Email"
              required
              className="w-full px-4 py-3 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:bg-primary-foreground/10 transition-all duration-300"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 text-lg font-bold bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg hover:shadow-secondary/20 transition-all duration-300 rounded-md inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:pointer-events-none"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Sending...
            </>
          ) : (
            "Subscribe"
          )}
        </button>
      </form>
    </div>
  );
}
