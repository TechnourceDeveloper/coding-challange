// import libs
import { React } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListTodoPage from '../pages/Todo/ListTodoPage';
import AddTodoPage from '../pages/Todo/AddTodoPage';

const PagesRoutes = () => {
  return (
    <Router basename={'/'}>
      <Routes>
        <Route path="/" element={<ListTodoPage />}></Route>
        <Route path="/add" element={<AddTodoPage />}></Route>
      </Routes>
    </Router>
  );
};
PagesRoutes.propTypes = {
  t: PropTypes.func
};
export default PagesRoutes;
