import { useEffect, useState } from "react";  // Импортируем необходимые функции из библиотеки React: useEffect и useState 
import { useDispatch, useSelector };          // а также из Redux: useDispatch и useSelector.




const initialize = []  // Создаем начальное состояние initialize, которое будет использовано в редьюсере по умолчанию.

const reducer = (state = initialize, action) => { // Создаем редьюсер reducer, который будет обрабатывать действия.
   switch(action.type) {     // Внутри редьюсера используется оператор switch для обработки различных типов действий.
      case 'list/load/fulfilled'://  В этом случае, если тип действия равен "list/load/fulfilled",
        return action.payload  //    то возвращается action.payload.

    default:
        return state;    // В противном случае, возвращается текущее состояние state.
   }
}

const store = createStore(reducer, applyMiddleWare(thunk))
// Создаем объект store с помощью функции createStore из Redux, передавая в нее редьюсер и middleware thunk.





const App = () => {  // Создаем компонент App как функциональный компонент.
   const list = useSelector(state => state);  // Используем хук useSelector для получения состояния list из хранилища Redux.
   const dispatch = useDispatch();  // Используем хук useDispatch для получения функции dispatch из хранилища Redux.
   const [isLoading, setIsLoading] = useState(false); // Используем хук useState для создания состояния isLoading со значением по умолчанию false.

   const handleClick = () => {   // Создаем функцию handleClick, которая будет вызываться при нажатии кнопки.
      setIsLoading(true);       // Устанавливаем состояние isLoading в значение true, чтобы отобразить состояние загрузки.
      dispatch(loadList())     // Вызываем функцию dispatch с действием loadList.
   };

   const Preloader = () => { // Создаем компонент Preloader, который будет отображать прелоадер во время загрузки данных. 

    return (    <div>Loading...</div>   ) // В данном случае, просто выводим текст "Loading...".

   };

   useEffect(() => {  // Используем хук useEffect, чтобы выполнить функцию после каждого рендера компонента.
    if(isLoading) {    // Если состояние isLoading равно true
        dispatch(loadList()) // вызываем функцию dispatch с действием loadList.
    }
   }, [isLoading]); // Зависимость isLoading указана во втором аргументе массива зависимостей, чтобы функция вызывалась только при изменении isLoading.

 

   const loadList = () => {  // Создаем функцию loadList
    return (dispatch) => {  // которая возвращает функцию с аргументом dispatch.
        fetch("https://jsonplaceholder.typicode.com/photos") // Это асинхронная функция, которая выполняет запрос к API и диспатчит результат.
            .then((response) => response.json()) // Это метод цепочки .then(), который вызывается после завершения предыдущего асинхронного запроса и получения ответа. 
            // Это означает, что он будет выполнен, когда ответ от сервера будет получен. 
            // В блоке функции обратного вызова response.json() используется для преобразования ответа сервера в формат JSON.
            .then((json) => { //Это еще один метод цепочки .then(), который будет выполнен после успешного преобразования ответа сервера в формат JSON.
               //  Внутри этого блока функции обратного вызова происходит следующее:
                dispatch({ // Вызывается функция dispatch, предоставленная хуком useDispatch, чтобы отправить действие в хранилище Redux.
                    type: "load/list/fulfilled", // Устанавливается тип действия 'load/list/fulfilled'.
                    payload: json, // Данные в формате JSON, полученные из ответа сервера, устанавливаются в поле payload действия.
                });
            });
    };
};

   return (  // Возвращаем разметку компонента App.
    <div>
        <button onClick={handleClick}></button> // Создаем кнопку, которая будет вызывать функцию handleClick при нажатии.

    {!isLoading ? <Preloader /> : (  // Используем тернарный оператор для проверки состояния isLoading.
    // Если isLoading равно false, отображаем компонент Preloader. // Если isLoading равно true:
        <ol>  // Отображаем элемент <ol>, в котором каждый элемент списка  представлен фотографией (item.url) из состояния list.
            {list.map(item => {
                <li key={item.id}>
                {item.url}
                </li>
            })}
        </ol>
    )}
 </div>
   );

}

export default App;








