import React, {useState} from "react";
// Импортируем нужные функции из библиотеки React: useState.

const App = () => {  // Создаем компонент App как функциональный компонент.
  const [isLoading, setIsLoading] = useState(false);  // Используем хук useState для создания состояний isLoading и list.
  const [list, setList] = useState([]);
// isLoading будет использоваться для отображения состояния загрузки (true/false).
// list будет содержать список фотографий, полученных из API.
const handleClick = () => { // Создаем функцию handleClick, которая будет вызываться при нажатии кнопки.
   setIsLoading(true); // Устанавливаем состояние isLoading в значение true, чтобы отобразить состояние загрузки.

   fetch('https://jsonplaceholder.typicode.com/photos')  // Выполняем запрос к API https://jsonplaceholder.typicode.com/photos с помощью функции fetch.
   .then(response => response.json()) // Парсим ответ в формат JSON с помощью метода .json().
   .then(data => {
    setList(data); // Устанавливаем полученные данные в состояние list с помощью функции setList.
    setIsLoading(false); // Устанавливаем состояние isLoading в значение false, чтобы скрыть состояние загрузки.
   });
}  
   const Preloader = () => { // Создаем компонент Preloader, который будет отображать прелоадер во время загрузки данных. 
    return (
        <div>Loading...</div> // В данном случае, просто выводим текст "Loading...".
    )
   }
      
     return ( // Возвращаем разметку компонента App.
        <div>
        <button onClick={handleClick}>Here</button> // Создаем кнопку, которая будет вызывать функцию handleClick при нажатии.
          {isLoading ? <Preloader/> : (   // Используем тернарный оператор для проверки состояния isLoading. 
                                         // Если isLoading равно true, отображаем компонент Preloader.
                                        // Если isLoading равно false:
   // Отображаем элемент <ol>, в котором каждый элемент списка (<li>) представлен фотографией (item.url) из состояния list.
           <ol>                    
                {list.map(item => {
                    <li key={item.id}>{item.url}</li>
                })}
            </ol>
          )}

        </div>
     );

}


export default App;



// Реагирует на нажатие кнопки и выполняет запрос к API для получения списка фотографий.
// Выводит прелоадер во время загрузки и список фотографий после загрузки.

