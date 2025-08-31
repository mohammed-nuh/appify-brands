import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const LMSDetail = () => {
  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-6 flex flex-col items-center">
      {/* Service Overview */}
      <div className="max-w-3xl text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Learning Management System (LMS) Development</h2>
        <p className="text-muted-foreground text-lg">
          Build powerful LMS platforms for schools, colleges, and online educators. 
          Our LMS websites are scalable, user-friendly, and packed with e-learning features.
        </p>
      </div>

      {/* Package Models */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {/* Basic */}
        <Card className="rounded-2xl shadow-md hover:shadow-xl transition">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Basic</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">For small institutions or educators starting online.</p>
            <ul className="text-sm space-y-2 mb-6">
              <li>✔ Course Listing & Enrollment</li>
              <li>✔ User Authentication</li>
              <li>✔ Basic Dashboard</li>
            </ul>
            <Button className="w-full">Choose Basic</Button>
          </CardContent>
        </Card>

        {/* Plus */}
        <Card className="rounded-2xl shadow-md hover:shadow-xl transition border-2 border-primary">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Plus</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">Great for institutions needing advanced LMS features.</p>
            <ul className="text-sm space-y-2 mb-6">
              <li>✔ Course Management System</li>
              <li>✔ Quiz & Assessment Modules</li>
              <li>✔ Progress Tracking</li>
              <li>✔ Instructor Dashboard</li>
            </ul>
            <Button className="w-full">Choose Plus</Button>
          </CardContent>
        </Card>

        {/* Pro */}
        <Card className="rounded-2xl shadow-md hover:shadow-xl transition">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Pro</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">For universities or large-scale e-learning platforms.</p>
            <ul className="text-sm space-y-2 mb-6">
              <li>✔ Fully Custom LMS</li>
              <li>✔ Video Lectures & Live Classes</li>
              <li>✔ Payment Gateway Integration</li>
              <li>✔ Gamification & Certificates</li>
              <li>✔ Scalability for Thousands of Users</li>
            </ul>
            <Button className="w-full">Choose Pro</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LMSDetail;
