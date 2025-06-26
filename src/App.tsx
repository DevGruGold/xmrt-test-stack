
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TokenDao from "./pages/TokenDao";
import CashDapp from "./pages/CashDapp";
import SmartDevices from "./pages/SmartDevices";
import AIAgents from "./pages/AIAgents";
import Enterprise from "./pages/Enterprise";
import About from "./pages/About";
import Invest from "./pages/Invest";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/token-dao" element={<TokenDao />} />
          <Route path="/cashdapp" element={<CashDapp />} />
          <Route path="/devices" element={<SmartDevices />} />
          <Route path="/ai-agents" element={<AIAgents />} />
          <Route path="/enterprise" element={<Enterprise />} />
          <Route path="/about" element={<About />} />
          <Route path="/invest" element={<Invest />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
