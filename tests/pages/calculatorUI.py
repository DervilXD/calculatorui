from selenium.webdriver.common.by import By

class CalculatorUI:
    def __init__(self, driver):
        self.__driver = driver
        self.__equal = (By.CLASS_NAME, 'equals')
        self.__result = (By.CLASS_NAME, 'screen')
    
    def enter_number(self, number):
        number_str = str(number)
        array_num = [int(digit) for digit in number_str]
        for num in array_num:
            button_number = self.__driver.find_element(By.XPATH, "//button[text()='{}']".format(str(num)))
            button_number.click()

    def enter_operator(self, operator):
        button_operator = self.__driver.find_element(By.XPATH, "//button[text()='{}']".format(str(operator)))
        button_operator.click()

    def click_equal(self):
        button_equal = self.__driver.find_element(*self.__equal)
        button_equal.click()

    def get_result(self):
        res = self.__driver.find_element(*self.__result)
        return res.text

    # def __init__(self, driver):
    #     self.__driver = driver
    #     self.__number1_input = (By.ID, 'number1')
    #     self.__number2_input = (By.ID, 'number2')
    #     self.__operator_select = (By.ID, 'function')
    #     self.__calculate_button = (By.ID, 'calculate')
    #     self.__answer_span = (By.ID, 'answer')
    
    # def enter_number1(self, number):
    #     number_input = self.__driver.find_element(*self.__number1_input)
    #     number_input.send_keys(number)

    # def enter_number2(self, number):
    #     number_input = self.__driver.find_element(*self.__number2_input)
    #     number_input.send_keys(number)

    # def select_operator(self, operation_name):
    #     select = self.__driver.find_element(*self.__operator_select)
    #     select.send_keys(operation_name)

    # def click_calculate(self):
    #     button = self.__driver.find_element(*self.__calculate_button)
    #     button.click()

    # def  get_answer(self):
    #     span = self.__driver.find_element(*self.__answer_span)
    #     return span.text