import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import WrapButton from "@/components/ui/wrap-button";

const AgencyDetail = ({ onPlanSelect }: { onPlanSelect: (plan: string) => void }) => {
  return (
    <div className="mt-10 min-h-screen bg-gradient-to-b from-background to-muted py-12 px-6 flex flex-col items-center">
      {/* Service Overview */}
      <div className="max-w-3xl text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-primary">
          Agency Website Development
        </h2>
        <p className="text-muted-foreground text-lg">
          Showcase your agency’s services, team, and portfolio with a professional website. 
          We design modern, responsive, and SEO-friendly agency websites tailored to your brand.
        </p>
      </div>

      {/* Package Models */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {/* Basic */}
        <Card className="rounded-2xl shadow-md hover:shadow-xl transition bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">Basic</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">Perfect for small agencies or startups.</p>
            <ul className="text-sm text-muted-foreground space-y-2 mb-6">
              <li>✔ 3-4 Pages (Home, Services, About, Contact)</li>
              <li>✔ Responsive Design</li>
              <li>✔ Basic Branding</li>
            </ul>
            <WrapButton onClick={() => onPlanSelect("basic")} variant="green">Choose Basic</WrapButton>
          </CardContent>
        </Card>

        {/* Plus */}
        <Card className="rounded-2xl shadow-md hover:shadow-xl transition border-2 border-primary bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">Plus</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">Ideal for growing agencies with more content needs.</p>
            <ul className="text-sm text-muted-foreground space-y-2 mb-6">
              <li>✔ Multi-Page Website (6-8 pages)</li>
              <li>✔ Blog/News Section</li>
              <li>✔ Team & Portfolio Showcase</li>
              <li>✔ Contact Form Integration</li>
            </ul>
            <WrapButton onClick={() => onPlanSelect("plus")} variant="green">Choose Plus</WrapButton>
          </CardContent>
        </Card>

        {/* Pro */}
        <Card className="rounded-2xl shadow-md hover:shadow-xl transition bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">Pro</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">For agencies wanting a premium, feature-rich website.</p>
            <ul className="text-sm text-muted-foreground space-y-2 mb-6">
              <li>✔ Fully Custom Design</li>
              <li>✔ CMS Integration</li>
              <li>✔ SEO Optimization</li>
              <li>✔ Animations & Interactions</li>
              <li>✔ Ongoing Support</li>
            </ul>
            <WrapButton onClick={() => onPlanSelect("pro")} variant="green">Choose Pro</WrapButton>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AgencyDetail;
