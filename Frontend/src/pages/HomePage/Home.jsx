import { useContext, useEffect } from 'react';
import { Navbar, Hero, Biography, Departments, MessageForm } from '../../components/home-components/index'
import { Context } from '../../main';

function HomePage() {

  const { isAuthenticated } = useContext(Context)

  useEffect(() => {
    console.log('inside home and value of authentication is ', isAuthenticated);
  }
    , [isAuthenticated])

  return (
    <div className="min-h-screen w-full text-white flex flex-col gap-[10vmin] relative ">
      <Navbar />
      <Hero title="Welcome to zeeCare medical institute | your trusted health provider" imageUrl="/public/hero.png" />
      <Biography imageUrl={'/public/about.png'} />
      <Departments />
      <MessageForm />
    </div>
  );
}

export default HomePage;