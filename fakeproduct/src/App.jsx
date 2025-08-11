import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Label } from './components/ui/label';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './components/ui/sheet';
import { Camera, Menu } from 'lucide-react';

function App() {
  const [isVerifyOpen, setIsVerifyOpen] = useState(false);
  const [isScanOpen, setIsScanOpen] = useState(false);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-14 items-center">
            <div className="mr-4 hidden md:flex">
              <Link className="mr-6 flex items-center space-x-2" to="/">
                <span className="hidden font-bold sm:inline-block">Fake Product Detection</span>
              </Link>
              <nav className="flex items-center space-x-6 text-sm font-medium">
                <Link className="transition-colors hover:text-foreground/80 text-foreground/60" to="/">Home</Link>
                <Button variant="ghost" onClick={() => setIsVerifyOpen(true)}>Verify</Button>
                <Link className="transition-colors hover:text-foreground/80 text-foreground/60" to="/about">About</Link>
                <Button variant="ghost" onClick={() => setIsScanOpen(true)}>Scan</Button>
              </nav>
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <nav className="flex flex-col space-y-3">
                  <Link className="transition-colors hover:text-foreground/80 text-foreground/60" to="/">Home</Link>
                  <Button variant="ghost" onClick={() => setIsVerifyOpen(true)}>Verify</Button>
                  <Link className="transition-colors hover:text-foreground/80 text-foreground/60" to="/about">About</Link>
                  <Button variant="ghost" onClick={() => setIsScanOpen(true)}>Scan</Button>
                </nav>
              </SheetContent>
            </Sheet>
            <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
              <nav className="flex items-center space-x-2">
                <Button variant="ghost" asChild><Link to="/signin">Sign In</Link></Button>
                <Button asChild><Link to="/signup">Sign Up</Link></Button>
              </nav>
            </div>
          </div>
        </header>
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Fake Product Detection. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" to="/terms">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" to="/privacy">
              Privacy
            </Link>
          </nav>
        </footer>
        <VerifySheet isOpen={isVerifyOpen} onClose={() => setIsVerifyOpen(false)} />
        <ScanSheet isOpen={isScanOpen} onClose={() => setIsScanOpen(false)} />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Fake Product Detection
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Protect yourself from counterfeit products. Verify authenticity with ease.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <Button className="w-full" onClick={() => {}}>Verify Product</Button>
              <Button className="w-full" variant="outline" onClick={() => {}}>Scan QR Code</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How It Works</h2>
              <p className="mx-auto max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our advanced system uses cutting-edge technology to verify the authenticity of products.
              </p>
            </div>
            <div className="w-full max-w-full overflow-hidden rounded-lg shadow-xl">
              <img
                src="/placeholder.svg?height=400&width=800"
                alt="Fake Product Detection Process"
                className="w-full h-auto object-cover aspect-video"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function About() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-6">About Us</h1>
        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          We are dedicated to combating counterfeit products and protecting consumers. Our advanced fake product detection system utilizes cutting-edge technology to ensure product authenticity.
        </p>
      </div>
    </section>
  );
}

function SignIn() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-6">Sign In</h1>
        <form className="space-y-4 max-w-sm mx-auto">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Enter your email" type="email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" placeholder="Enter your password" type="password" required />
          </div>
          <Button type="submit" className="w-full">Sign In</Button>
        </form>
      </div>
    </section>
  );
}

function SignUp() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-6">Sign Up</h1>
        <form className="space-y-4 max-w-sm mx-auto">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Enter your email" type="email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" placeholder="Create a password" type="password" required />
          </div>
          <Button type="submit" className="w-full">Sign Up</Button>
        </form>
      </div>
    </section>
  );
}

function VerifySheet({ isOpen, onClose }) {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Verify Product</SheetTitle>
          <SheetDescription>Enter product details to verify authenticity.</SheetDescription>
        </SheetHeader>
        <form className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="product-id">Product ID</Label>
            <Input id="product-id" placeholder="Enter product ID" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input id="address" placeholder="Your address" />
          </div>
          <Button type="submit" className="w-full">Verify</Button>
        </form>
      </SheetContent>
    </Sheet>
  );
}

function ScanSheet({ isOpen, onClose }) {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Scan QR Code</SheetTitle>
          <SheetDescription>Use your camera to scan the product's QR code.</SheetDescription>
        </SheetHeader>
        <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg mt-4">
          <Camera className="h-12 w-12 text-gray-400" />
        </div>
        <Button className="w-full mt-4">Start Scanning</Button>
      </SheetContent>
    </Sheet>
  );
}

export default App;