import React from 'react';
import styles from './UserPage.module.scss';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

function EmtryUser() {
  return (
    <div>
      <Paper classes={{ root: styles.root }}>
        <h5 className={styles.text}>Вы не авторизованны, выберите один из вариантов</h5>
        <div className={styles.line} />
        <Link to="/login">
          <Button classes={{ root: styles.btn }} type="submit" size="large" variant="contained" fullWidth>
            Войти
          </Button>
        </Link>
        <h1>Или</h1>
        <Link to="/register">
          <Button classes={{ root: styles.btn }} type="submit" size="large" variant="contained" fullWidth>
            Зарегистрироваться
          </Button>
        </Link>
      </Paper>
    </div>
  );
}

export default EmtryUser;
