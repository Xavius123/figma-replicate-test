import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import QualiDesignSystem from './pages/QualiDesignSystem'
import StandalonePage from './pages/StandalonePage'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

// Home page component
const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-6">Component Showcase</Badge>
          <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-6">
            Figma to Code
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"> Demo</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            See how shadcn/ui components and Tailwind CSS work together to create beautiful, 
            responsive interfaces that match your Figma designs perfectly.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary-hover hover:to-purple-700">
              Explore Components
            </Button>
            <Button variant="outline" size="lg">
              View Source
            </Button>
          </div>
        </div>
      </section>

      {/* Component Showcase Grid */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Buttons Showcase */}
          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                Buttons
              </CardTitle>
              <CardDescription>
                Various button styles and interactions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Button size="sm">Default</Button>
                <Button variant="secondary" size="sm">Secondary</Button>
                <Button variant="outline" size="sm">Outline</Button>
                <Button variant="ghost" size="sm">Ghost</Button>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button size="lg">Large</Button>
                <Button variant="destructive" size="lg">Destructive</Button>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Menu */}
          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                Navigation Menu
              </CardTitle>
              <CardDescription>
                Accessible navigation components
              </CardDescription>
            </CardHeader>
            <CardContent>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="p-4 w-48">
                        <p className="text-sm text-slate-600">Learn how to get started with shadcn/ui</p>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Components
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Examples
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </CardContent>
          </Card>

          {/* Badges */}
          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                Badges
              </CardTitle>
              <CardDescription>
                Status indicators and labels
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-primary">Custom</Badge>
                <Badge className="bg-purple-500">Purple</Badge>
                <Badge className="bg-green-500">Success</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Cards */}
          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                Cards
              </CardTitle>
              <CardDescription>
                Content containers with headers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Card className="border-dashed">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Example Card</CardTitle>
                  <CardDescription className="text-xs">
                    This is a nested card example
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-slate-600">
                    Cards can contain any content and can be nested.
                  </p>
                </CardContent>
              </Card>
            </CardContent>
          </Card>

          {/* Separators */}
          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                Separators
              </CardTitle>
              <CardDescription>
                Visual dividers and spacing
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm">Content above</p>
                <Separator />
                <p className="text-sm">Content below</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">Left</span>
                <Separator orientation="vertical" className="h-4" />
                <span className="text-sm">Right</span>
              </div>
            </CardContent>
          </Card>

          {/* Interactive Demo */}
          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 md:col-span-2 lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                Interactive Demo
              </CardTitle>
              <CardDescription>
                Try the components yourself
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Theme</label>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="w-full">Light</Button>
                  <Button variant="outline" size="sm" className="w-full">Dark</Button>
                </div>
              </div>
              <Separator />
              <div className="space-y-2">
                <label className="text-sm font-medium">Size</label>
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1">Small</Button>
                  <Button size="default" className="flex-1">Default</Button>
                  <Button size="lg" className="flex-1">Large</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features Section */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why This Stack?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The perfect combination for rapid Figma-to-code development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Lightning Fast</h3>
                <p className="text-sm text-slate-600">Copy Figma measurements directly to Tailwind classes for instant results.</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Design System Ready</h3>
                <p className="text-sm text-slate-600">Custom colors, spacing, and typography that match your Figma tokens.</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Production Ready</h3>
                <p className="text-sm text-slate-600">Accessible, responsive, and optimized components out of the box.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mt-20">
          <Card className="bg-gradient-to-r from-primary to-purple-600 text-white">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">50+</div>
                  <div className="text-primary-foreground/80">Components</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-primary-foreground/80">Accessible</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">∞</div>
                  <div className="text-primary-foreground/80">Customizable</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">⚡</div>
                  <div className="text-primary-foreground/80">Fast Dev</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </section>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="quali" element={<QualiDesignSystem />} />
          <Route path="standalone" element={<StandalonePage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
