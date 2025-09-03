import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import WrapButton from "@/components/ui/wrap-button";

const PortfolioDetail = ({ onPlanSelect }: { onPlanSelect: (plan: string) => void }) => {
  return (
    <div className="mt-10 min-h-screen bg-background py-12 px-6 flex flex-col items-center">
      {/* Service Overview Section */}
      <div className="max-w-3xl text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-primary">
          Portfolio Website Development
        </h2>
        <p className="text-muted-foreground text-lg">
          Here you can write a short description of your service. 
          Explain what makes your portfolio websites unique, professional, and user-friendly. 
          Leave space to highlight your tech stack, design approach, or special features.
        </p>
      </div>

      {/* Package Models */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {/* Basic Package */}
        <Card className="rounded-2xl shadow-md hover:shadow-xl transition">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">
              Basic
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Perfect for students or beginners who need a simple portfolio.
            </p>
            <ul className="text-sm text-muted-foreground space-y-2 mb-6">
              <li>✔ 1 Page Portfolio</li>
              <li>✔ Responsive Design</li>
              <li>✔ Basic Styling</li>
            </ul>
          </CardContent>
          <CardFooter  className="mt-auto">
            <WrapButton onClick={() => onPlanSelect("basic")} variant="green" className="border-0">Choose Basic</WrapButton>
          </CardFooter>
        </Card>

        {/* Plus Package */}
        <Card className="rounded-2xl shadow-md hover:shadow-xl transition border-2 border-primary">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">
              Plus
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Ideal for professionals who need a polished personal website.
            </p>
            <ul className="text-sm text-muted-foreground space-y-2 mb-6">
              <li>✔ Multi-Page Portfolio</li>
              <li>✔ Modern UI with Tailwind</li>
              <li>✔ Contact Form Integration</li>
            </ul>
          </CardContent>
          <CardFooter  className="mt-auto">
            <WrapButton onClick={() => onPlanSelect("plus")} variant="green" className="border-0">Choose Plus</WrapButton>
          </CardFooter>
        </Card>

        {/* Pro Package */}
        <Card className="rounded-2xl shadow-md hover:shadow-xl transition">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">
              Pro
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Best for businesses or advanced users needing full customization.
            </p>
            <ul className="text-sm text-muted-foreground space-y-2 mb-6">
              <li>✔ Custom Design & Animations</li>
              <li>✔ Blog/Portfolio Section</li>
              <li>✔ SEO Optimization</li>
              <li>✔ Free Support & Updates</li>
            </ul>
          </CardContent>
          <CardFooter  className="mt-auto">
            <WrapButton onClick={() => onPlanSelect("pro")} variant="green" className="border-0">Choose Pro</WrapButton>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default PortfolioDetail;
