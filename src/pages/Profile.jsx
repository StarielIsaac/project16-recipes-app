import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Profile() {
  const history = useHistory();

  if (!localStorage.user) {
    history.push('/');
  }

  const user = JSON.parse(localStorage.getItem('user'));

  const clearLocalStorage = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <>
      <Header title="Profile" />
      <span
        htmlFor="input-email"
        type="email"
        name="email"
        data-testid="profile-email"
      >
        { user ? user.email : '' }
      </span>
      <Link to="/done-recipes">
        <button
          type="button"
          name="done-recipes"
          data-testid="profile-done-btn"
        >
          Done Recipes
        </button>
      </Link>
      <Link to="/favorite-recipes">
        <button
          type="button"
          name="bnt-favorite"
          data-testid="profile-favorite-btn"
        >
          Favorite Recipes
        </button>
      </Link>
      <Link to="/">
        <button
          type="button"
          name="btn-logout"
          data-testid="profile-logout-btn"
          onClick={ clearLocalStorage }
        >
          Logout
        </button>
      </Link>
      <Footer />
    </>
  );
}

export default Profile;
