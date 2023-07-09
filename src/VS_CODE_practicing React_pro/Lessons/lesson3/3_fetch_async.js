import {useEffect, useState} from 'react';
// Импортируем нужные функции из библиотеки React: useEffect и useState.

 function App() { //Создаем компонент App.
  const [usePhoto, setUsePhoto] = useState([]); 
// Используем хук useState для создания состояния usePhoto с пустым массивом в качестве значения по умолчанию. 
// Это состояние будет содержать данные о фотографиях, полученные из API.

  useEffect(() => { 
    // Используем хук useEffect для выполнения эффекта сразу после монтирования компонента App (пустой массив [] в качестве второго аргумента useEffect).
    fetch('https://jsonplaceholder.typicode.com/photos') // В функции-эффекте вызываем fetch для получения данных из API https://jsonplaceholder.typicode.com/photos.
    .then((response) => {   
        if(!response.ok) { // Проверяем ответ сервера с помощью метода response.ok.
            throw new Error('Error'); // Если ответ не является успешным, выбрасываем ошибку.
        }
        return response.json() // Преобразуем ответ в формат JSON, вызывая метод response.json().
    })
       .then((json) => { // В следующем then блоке обрабатываем полученные данные и устанавливаем их в состояние usePhoto с помощью функции setUsePhoto.
        setUsePhoto(json)
       }).catch((e) => { // Если происходит ошибка при выполнении запроса или обработке данных, выводим ошибку в консоль.
        console.log(e);
       })
  }, [])


  return (   // Возвращаем разметку компонента, где выводим каждую фотографию из состояния usePhoto в отдельном блоке, обернутом в фрагмент <>...</>.
    <>
       {usePhoto.map((item) => {
        return (
            <>
              {item.url}
            </>
        )
       })}
    </>
  )

}

export default App;




// Получает данные о фотографиях из API https://jsonplaceholder.typicode.com/photos.
// Отображает список URL-адресов фотографий на странице компонента App.