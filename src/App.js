import logo from './logo.svg';
import './App.css';
import Pages from './componets/pages';
import { BookDataProvider } from './componets/pages/BooksContext';

function App() {
  return (
    <>
    <BookDataProvider>
    <Pages/>

    </BookDataProvider>
    </>
  );
}

export default App;
