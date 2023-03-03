import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

function Accounts(props) {
  const { isLoggedIn } = props;
  console.log('accounts', isLoggedIn)
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  return (
    <div>
      {isLoggedIn &&
        <div>
          <div>
            <h1>This is my accounts page</h1>
          </div>

          <div>
            {/* render your login form here */}
          </div>
        </div>

      }
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn
  };
};

export default connect(mapStateToProps)(Accounts);
