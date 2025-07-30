const Index = () => {
  console.log("Index component is rendering");
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="text-center space-y-4 p-8">
        <h1 className="text-4xl font-bold text-foreground">Welcome to Your App</h1>
        <p className="text-xl text-muted-foreground">Your app is loading successfully!</p>
        <div className="w-4 h-4 bg-primary rounded mx-auto"></div>
      </div>
    </div>
  );
};

export default Index;
