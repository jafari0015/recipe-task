import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RecipeDetails from './pages/RecipeDetails';
import NotFound from './pages/NotFound';
import Favorites from './pages/Favorites';
import WelcomeScreen from './pages/WelcomeScreen'
import LoginForm from './pages/LoginForm';
import CreateAccount  from './pages/CreateAccount';
import Cuisine from './pages/Cuisine';
import Profile from './pages/Profile';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<WelcomeScreen />} />
          <Route path='/home' element={<Home />} />
          <Route path='/recipeDetails/:id' element={<RecipeDetails />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/createAccount' element={<CreateAccount />} />
          <Route path='/cuisine/:area' element={<Cuisine />} />
          <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
  