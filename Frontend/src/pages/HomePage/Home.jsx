import { useContext, useEffect } from 'react';
import { Navbar, Hero, Biography, Departments, MessageForm,Footer } from '../../components/home-components/index'
import { Context } from '../../main';

function HomePage() {

  return (
    <div className="min-h-screen w-full text-white flex flex-col gap-[10vmin] relative overflow-y-visible">
      <Navbar />
      <Hero title="Welcome to zeeCare medical institute | your trusted health provider" imageUrl="/public/hero.png" />
      <Biography imageUrl={'/public/about.png'} />
      <Departments />
      <MessageForm />
      <Footer/>
    </div>
  );
}

export default HomePage;