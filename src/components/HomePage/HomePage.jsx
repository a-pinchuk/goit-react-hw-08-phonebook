import './HomePage.css';

export const HomePage = () => {
  return (
    <div className="card__area">
      <div className="card">
        <div className="face face1">
          <h2>Contacts App</h2>
          <p>
            Добро пожаловать в наше приложение - менеджер контактов! Здесь вы
            сможете добавлять, удалять и редактировать свои контакты с удобным и
            понятным интерфейсом. Все ваши контакты будут храниться в
            безопасности и доступны только вам. Мы предлагаем минималистичный
            дизайн для удобства использования и эффективности работы с
            контактами.
          </p>
        </div>
        <div className="face face2">
          <h2>Apinchuk contacts App</h2>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
