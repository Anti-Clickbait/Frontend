import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainPageLayout from '../layouts/MainPageLayout';
import HomePage from '../pages/HomePage';
import ArticlePage from 'pages/ArticlePage';
import BookmarkPage from 'pages/BookmarkPage';
import SubscribePage from 'pages/SubscribePage';
import LoginPage from 'pages/LoginPage';
import UserInfoPage from 'pages/UserInfoPage';

const RootRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPageLayout />}>
          <Route index element={<HomePage />}/>
          <Route path="/article/:id" element={<ArticlePage />} />
          <Route path="/bookmark" element={<BookmarkPage />} />
          <Route path="/subscribe" element={<SubscribePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/user/info" element={<UserInfoPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
};

export default RootRoutes;