export const localizationUa = {
    global: {
        loading: "Завантаження...",
        saveBtn: "Зберегти",
        message: "Повідомлення",
        yes: "Так",
        no: "Нi"
    },
    choosingLanguage: {
        titleFirstTime: "Вибери мову",
        title: "Українська",
        btnFirstTime: "Далi",
        btn: "Підтвердити"
    },

    welcomeScreen: {
        title: "Ласкаво просимо!",
        subtitle: "Приєднуйтесь до нас зараз, створіть обліковий запис або увійдіть.",
        btnView: "Перегляд меню",
        btnLogin: "Увiйти",
        policy: "Реєструючись, приймаєте Умови використання та Політику конфіденційності."
    },
    loginScreen: {
        title: "Привіт знову!",
        subtitle: "Ласкаво просимо назад, за вами скучили!",
        emailLabel: "Електронна пошта",
        passwordLabel: "Пароль",
        btnLogin: "Логін",
        registerLink: "Немає облікового запису?",
        emailRequiredError: "Електронна пошта є необхідна",
        invalidEmailError: "Електронна пошта не є коректною",
        passwordRequiredError: "Пароль не може бути пустим"
    },
    registerScreen: {
        title: "Реєстрацiя",
        subtitle: "Введіть свою інформацію, щоб створити обліковий запис!",
        usernameLabel: "Ім'я користувача",
        emailLabel: "Електронна пошта",
        passwordLabel: "Пароль",
        btnRegister: "Зареєструватися",
        loginLink: "Вже є аккаунт? авторизуйтесь",
        emailRequiredError: "Необхідно вказати адресу електронної пошти",
        invalidEmailError: "Електронна адреса недійсна",
        usernameRequiredError: "Потрібно ввести ім'я користувача",
        passwordRequiredError: "Необхідно ввести пароль",
        shortUsernameError: "Ім'я користувача занадто коротке",
        longUsernameError: "Ім'я користувача задовге",
        shortPasswordError: "Пароль занадто короткий",
        longPasswordError: "Пароль задовгий"
    },
    homeScreen: {
        welcome: "Привіт",
        discount: {
            title: "Отримайте спеціальну знижку",
            off: "Знижка",
            btn: "Отримати ваучер",
            authMessage: "Ви повинні увійти в систему, щоб скористатися цією знижкою",
        },
        menu: "Меню",
        placeOrder: "Зробити Замовлення"
    },
    dishDetails: {
        foodDetail: "Деталі Блюда"
    },
    cartScreen: {
        title: "Корзина порожня",
        orderBtn: "Підтвердити замовлення"
    },
    favoritesScreen: {
        title: "У вас ще немає улюблених страв"
    },
    myProfileScreen: {
        mySettings: "Мої налаштування",
        myOrders: "Мої замовлення",
        usersList: "Список користувачiв",
        logout: "Вийти"
    },
    mySettingsScreen: {
        changeLanguage: "Змінити мову інтерфейсу",
        changeAvatarTitle: "Змінити аватар",
    },
    myOrdersScreen: {
        title: "У вас ще немає замовлень",
        status: "Статус",
        statusValue1: "Завершено",
        statusValue2: "В процесі",
        detailsBtn: "Деталі",
        totalPrice: "Загальна ціна до сплати"
    },
    avatarChangeScreen: {
        changeAvatarButton: "Змiни свiй аватар",
        successUpdateAvatarMessage: "Ваш аватар оновлено",
        failedUpdateAvatarMessage: "Помилка оновлення аватара, повторіть спробу"
    },
    modals: {
        order: {
            order: "Замовлення",
            listOfDishes: "Список страв"
        },
        dishDetails: {
            title: "Повідомлення",
            messageFavorite: "Вам необхідно авторизуватися, щоб додати цю страву в обране",
            messageOrder: "Ви повинні увійти, щоб замовити цю страву",
            existDishErr: {
                title: "Повідомлення",
                message: "Ця страва вже додана до вашого кошику"
            }
        },
        loginScreen: {
            loginError: "Помилка входу",
            policyError: "У вас недостатньо прав"
        },
        registerScreen: {
            registerError: "Помилка реєстрації"
        }
    },


    mainWorkerScreen: {
        noOrders: "На даний час немає жодних замовлень"
    },
    ordersDetailsScreenWorker: {
        completeMessage: "Ви не закінчили всі страви",
        btnTitle: "Закінчити",
        order: "Замовлення",
        date: "Дата",
        time: "Час",
        status: "Статус",
        discount: "Знижка",
        dishes: "Блюда",
        completed: "Завершено",
        inProcess: "В Процесi",
        dishItem: {
            dish: "Блюдо",
            quantity: "Кiлькiсть"
        }
    },

    addNewDishScreen: {
        name: "Назва страви",
        description: "Опис",
        weight: "Вага ( g ) ",
        calories: "Калорії ( KCal )",
        price: "Ціна ( в $ )",
        buttonTitle: "Далi"
    },

    editDishScreen: {
        name: "Назва страви",
        description: "Опис",
        weight: "Вага ( g ) ",
        calories: "Калорії ( KCal )",
        price: "Ціна ( в $ )",
        buttonTitle: "Оновити"
    },

    addDishImageScreen: {
        choseBtnTittle: "Вибрати",
        createBtnTittle: "Створити",
        permissionMessage: "Потрібен дозвіл на доступ до галереї!"
    },

    editDishImageScreen: {
        choseBtnTittle: "Вибрати",
        updateBtnTittle: "Оновити",
        permissionMessage: "Потрібен дозвіл на доступ до галереї!"
    },

    formValidation: {
        addNewDishScreenErrors: {
            name: "Потрібне ім'я",
            description: "Потрібен опис",
            weight: "Потрібна вага",
            calories: "Потрібні калорії",
            price: "Ціна обов'язкова"
        }
    },
    userDetailsScreen: {
        joined: "Приєднався",
        discountLabel: "Знижка використовується:",
        roles: "Ролі",
        userRole: "Користувач",
        workerRole: "Робітник",
        adminRole: "Адміністратор",
        isWorker: "Є працівником"
    }
};
