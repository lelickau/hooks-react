import React, { FC } from 'react';
import UseDebounce from '../components/code/UseDebounce';
import UseDebounceUse from '../components/code/UseDebounceUse';
import UseHover from '../components/code/UseHover';
import UseHoverUse from '../components/code/UseHoverUse';
import UseInput from '../components/code/UseInput';
import UseInputUse from '../components/code/UseInputUse';
import UseScrillUse from '../components/code/UseScrillUse';
import UseScroll from '../components/code/UseScroll';
import Form from '../components/form/Form';
import Hover from '../components/hover/Hover';
import List from '../components/listScroll/List';
import './home.css'

const Home: FC = () => {
    return (
    <>
        <section id="useinput" className="container">
            <h2 className="title">Хуки useValidationForm и useInput</h2>
            <article  className="content">
                <h3 className="subtitle">Описание</h3>
                <p className='text'>Можно использовать для валидации и управления значением input.</p>
                <p className="text">Хук <span className="code">useValidationForm</span> принимает два параметра - значение input (<span className="code">value</span>) и набор валидаторов в виде объекта (<span className="code">validations</span>).</p>

                <p className="text">Воспользуемся react хуком <span className="code">useEffect</span> с зависимостью <span className="code">value</span> (первый аргумент). Внутри <span className="code">useEffect</span> создаем цикл <span className="code">for in</span>, который будет пробегать по полям объекта <span className="code">validations</span> (второй аргумент) и с помощью <span className="code">switch case</span> конструкции делаем проверку при каждом изменении значения <span className="code">value</span>. Каждый тип валидации имеет свое состояние, которое можно будет использовать в разметке для оповещения пользователя об ошибках.
                </p>
                <ul>
                    <li className="list-p"><span className="code">minLength</span> проверит на минимальную длину, если длина меньше желаемой, то состояние <span className="code">minLengthErr</span> будет равно <span className="code">true</span> иначе <span className="code">false</span>.</li>
                    <li className="list-p"><span className="code">isEmpty</span> - проверит на отсутствие <span className="code">value</span>, если <span className="code">value</span> пустое, то состояние <span className="code">isEmpty</span> будет равно <span className="code">true</span> иначе <span className="code">false</span>.</li>
                    <li className="list-p"><span className="code">isEmail</span> - проверит валидность email адреса пользователя, если email не валиден, то <span className="code">emailErr</span> будет равно <span className="code">true</span> иначе <span className="code">false</span>.</li>
                </ul>

                <p className="text">Хук <span className="code">useInput</span> принимает два параметра - <span className="code">initialValue</span> (начальное значение) и <span className="code">validations</span> (объект с набором валидаторов). Создаем состояние <span className="code">value</span>, которое будет находиться внутри input и обработчик <span className="code">onChange</span>, который будет обрабатывать изменения внутри input и изменять значение <span className="code">value</span> на <span className="code">e.target.value</span> (значение введенное пользователем).</p>

                <p className="text">Состояние <span className="code">isDirty</span> - показывает, вышел пользователь из поля input либо нет. Изменять данное состояние будет функция-обработчик <span className="code">onBlur</span>. Обработчик <span className="code">onBlur</span> - отрабатывает в момент, когда пользователь покинул input.</p>
                <UseInput/>
            </article>
            <article className="content">
                <h3 className="subtitle">Использование</h3>
                <p className="text">Воспользуемся хуком useInput. Вызываем его для констант email и password. Параметрами передаем дефолтное значение <span className="code">value</span> и объект с набором валидаций (<span className="code">minLength, isEmpty, isEmail</span> - в константе email). Так как хук возвращает значение <span className="code">value</span> и функции, мы можем через созданные константы воспользоваться обработчиками <span className="code">onChange</span> и <span className="code">onBlur</span> в input, передав в них событие <span className="code">event</span>.</p>
                <UseInputUse/>
            </article>
            <article className="content">
                <h3 className="subtitle">Пример</h3>
                <Form/>
            </article>
        </section>
        {/* useScroll */}
        <section className="container">
            <h2 className="title">Хук useScroll</h2>
            <article className="content">
                <h3 className="subtitle">Описание</h3>
                <p className="text">Бесконечная автоматическая пагинация.</p>
                <p className="text">
                    Хук <span className="code">useScroll</span> параметрами принимает <span className="code">parentRef</span> - референс родительского элемента, <span className="code">childRef</span> - референс элемента ребенка и функцию <span className="code">callback</span>, которая будет вызываться когда пользователь доскролит до конца.
                </p>
                <p className="text">Внутри хука создаем с помощью <span className="code">useRef</span> observer (в данном случае observer это некоторая функция, которая будет отслеживать появление элемента в зоне видимости браузера).</p>
                <p className="text">Воспользуемся хуком <span className="code">useEffect</span> с зависимостью callback (третий параметр useScroll). Внутри создаем объект с опциями для observer <span className="code">(options)</span>. <span className="code">root</span> в опциях - это отслеживаемый объект, <span className="code">threshold: 0</span> указываем на то, что callback будет вызван как только дочерний элемент появится в зоне видимости. Далее создаем объект observer и поместим его в поле current нашего референса, первым параметром передаем колбэк, а вторым объект опций. В колбэк параметром передаем массив с target, условием проверим наличие отслеживаемого элемента в области видимости через <span className="code">target.isIntersecting</span> и запустим <span className="code">callback</span>.</p>
                <p className="text">Затем в <span className="code">observer.current.observe</span> указываем какой элемент нужно отслеживать (в данном случае это childRef.current).</p>
                <p className="text">Также важно при демонтирование компонента отключать отслеживание элемента. Поэтому возвращаем функцию, в которой вызываем <span className="code">unobserve</span>.</p>
                <UseScroll/>
            </article>
            <article className="content">
                <h3 className="subtitle">Использование</h3>
                <p className="text">В компоненте Todos c помощью <span className="code">useState</span> инициализируем состояние todos, в котором будет храниться массив с объектами todo, по умолчанию это будет пустой массив. Затем в разметке на корневой div задаем <span className="code">ref</span> равный <span className="code">parentRef</span>, далее  итерируемся по массиву todos с помощью функции map и для каждого элемента итерации отрисовываем блок div, в котором будет содержаться номер todo (id) и описание (title). В конец добавляем блок div с <span className="code">ref</span> равным <span className="code">childRef</span> (этот div будет условно "запускать" функцию callback, которая отправит запрос на сервер для получения новой порции данных.)</p>
                <p className="text">
                    Инициализируем состояние <span className="code">page</span>, которое будет равно по умолчанию <span className="code">1</span> - это состояние будет хранить номер страницы.
                </p>
                <p className="text">Также создаем переменную <span className="code">limit</span> - это лимит на количество объектов todo получаемых с сервера. По умолчанию задаем 7.</p>
                <p className="text">
                    Создадим функцию <span className="code">fetchTodos</span>, которая будет обращаться к серверу для получения объектов todo. Полученные данные будем добавлять в состояние todos, а также следом изменять номер страницы. Параметрами функции передаем page и <span className="code">limit</span>. Данную функцию будем вызывать через react хук <span className="code">useCallback</span>, с зависимостями page и limit.
                </p>
                <p className="text">Вызываем кастомный хук <span className="code">useScroll</span> и передаем в качестве параметров две ссылки (<span className="code">parentRef</span>, <span className="code">childRef</span>) и <span className="code">callback</span>.</p>
                <UseScrillUse/>
            </article>
            <article className="content">
                <h3 className="subtitle">Пример</h3>
                <List/>
            </article>
        </section>
        <section className="container">
            <h2 className="title">Хук useHover</h2>
            <article className="content">
                <h3 className="subtitle">Описание</h3>
                <p className="text">Кастомная реализация псевдокласса hover.</p>
                <p className="text">Хук <span className="code">useHover</span> параметром принимает ref ссылку на элемент на котором будет срабатывать hover эффект и возвращает значение true или false.</p>
                <p className="text">Создаем внутри хука состояние <span className="code">isHovering</span>, которое по умолчанию равно <span className="code">false</span>. Затем реализуем две функции <span className="code">on</span> и <span className="code">off</span>. <span className="code">on</span> - будет изменять состояние <span className="code">isHovering</span> на true, а <span className="code">off</span> напротив - на false.</p>
                <p className="text">Воспользуемся react хуком <span className="code">useEffect</span>, внутри колбека первым делом проверим что поле current в референсе существует, если его нет - прекращаем работу функции. Если элемент существует, то вешаем несколько слушателей <span className="code">addEventListener</span> на этом элементе. Событие <span className="code">mouseenter</span> - отслеживает наведение мышкой на элемент, событие <span className="code">mousemove</span> - отслеживает когда пользователь водит мышкой по элементу, событие <span className="code">mouseleave</span> - отследит когда пользователь выходит за пределы элемента. На событиях mouseenter и mousemove будет отрабатывать функция on, а на mouseleave - off.</p>
                <p className="text">В конце необходимо удалять слушатели когда компонент демонтируется. Для этого возвращаем функцию к которой производим <span className="code">removeEventListener</span> на каждом событии.</p>
                <UseHover/>
            </article>
            <article className="content">
                <h3 className="subtitle">Использование</h3>
                <p className="text">Создаем референс hoverRef с помощью react хука <span className="code">useRef</span>, передаем его в jsx разметку атрибутом. Получаем значение <span className="code">isHoveringRef</span> через кастомный хук <span className="code">useHover</span> и в атрибутe <span className="code">style</span> делаем проверку, если пользователь навелся на элемент (isHoveringRef === true) background окрасится в красный, иначе в синий.</p>
                <UseHoverUse/>
            </article>
            <article className="content">
                <h3 className="subtitle">Пример</h3>
                <Hover/>
            </article>
        </section>
        <section className="container">
            <h2 className="title">Хук useDebounce</h2>
            <article className="content">
                <h3 className="subtitle">Описание</h3>
                <p className="text">Хук используется для задержки события до завершения времени ожидания. Поможет осуществить поиск не по нажатию на кнопку, а по завершению ввода текста в input или отследить поведение пользователя на сайте.</p>
                <p className="text">Хук <span className="code">useDebounce</span> параметрами принимает <span className="code">callback</span> и <span className="code">delay</span> - время задержки, через которую будет вызываться callback. Возвращает хук колбек функцию.</p>
                <p className="text">Создаем референс <span className="code">timer</span> с помощью react хука <span className="code">useRef</span>.</p>
                <p className="text">Создаем <span className="code">debouncedCallback</span> через react хука <span className="code">useCallback</span>, в массив зависимостей передаем <span className="code">callback</span> и <span className="code">delay</span>. Хук будет пересоздаваться только в том случае если callback или delay изменились. Параметром в функции хука <span className="code">useCallback</span> передаем бесконечное количество аргументов, а в теле функции проверяем, если внутри референса <span className="code">timer.current</span> что-то есть, то вызываем <span className="code">clearTimeout</span> и очищаем <span className="code">timer.current</span>. Далее в поле <span className="code">timer.current</span> помещаем вызов <span className="code">setTimeout</span> с задержкой равной <span className="code">delay</span>, а внутри вызываем <span className="code">callback</span>, передав в него бесконечное количество аргументов, полученных из функции, что на уровень выше.</p>
                <p className="text">Как только пользователь перестает печатать и интервал ввода символов превысит delay, сработает callback, который отправит запрос на сервер.</p>
                <UseDebounce/>
            </article>
            <article className="content">
                <h3 className="subtitle">Использование</h3>
                <p className="text">Создаем состояние value с помощью react хука <span className="code">useState</span>, по умолчанию это будет пустая строка. Передаем созданное <span className="code">value</span> в input через атрибут <span className="code">value</span>. </p>
                <p className="text">Создаем функции search и <span className="code">onChange</span>. Функция <span className="code">search</span> будет принимать параметром <span className="code">query</span> (ключевые слова для запроса) и получать данные с сервера. <span className="code">onChange</span> будет изменять состояние <span className="code">value</span> и вызывать функцию хука <span className="code">useDebounce</span> передавая в нее <span className="code">e.target.value</span>.</p>
                <p className="text">Воспользуемся кастомным хуком <span className="code">useDebounce</span>. Создаем переменную <span className="code">debouncedSearch</span>, вызываем хук и параметром передаем функцию <span className="code">search</span> и задержку в 500мс.</p>
                <UseDebounceUse/>
            </article>
        </section>
    </>
    )
}


export default Home
