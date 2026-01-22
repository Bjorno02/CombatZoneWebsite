import { Component, type ReactNode } from "react";
import { Container } from "./layout/Container";
import { Button } from "./ui/button";
import { AlertTriangle, RefreshCw } from "lucide-react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

/**
 * Error Boundary
 */
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log to error reporting service in production
    console.error("Error caught by boundary:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
          <Container>
            <div className="max-w-md mx-auto text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="text-primary" size={32} />
              </div>

              <h1 className="text-2xl font-bold font-heading text-neutral-900 mb-3">
                Something went wrong
              </h1>

              <p className="text-neutral-600 mb-8">
                We encountered an unexpected error. Please try refreshing the page.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  onClick={() => window.location.reload()}
                  className="bg-primary hover:bg-primary/90 text-white"
                >
                  <RefreshCw size={16} className="mr-2" />
                  Refresh Page
                </Button>

                <Button variant="outline" onClick={this.handleReset}>
                  Try Again
                </Button>
              </div>

              {process.env.NODE_ENV === "development" && this.state.error && (
                <details className="mt-8 text-left bg-neutral-900 text-neutral-300 p-4 rounded text-sm overflow-auto">
                  <summary className="cursor-pointer text-neutral-400 mb-2">
                    Error Details (dev only)
                  </summary>
                  <pre className="whitespace-pre-wrap">
                    {this.state.error.message}
                    {"\n\n"}
                    {this.state.error.stack}
                  </pre>
                </details>
              )}
            </div>
          </Container>
        </div>
      );
    }

    return this.props.children;
  }
}
