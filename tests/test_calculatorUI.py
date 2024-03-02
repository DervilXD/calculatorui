import unittest
import time
from selenium import webdriver
from pages.calculatorUI import CalculatorUI

class TestCalculatorUI(unittest.TestCase):
    def setUp(self):
        options = webdriver.ChromeOptions()
        options.add_argument("--disable-web-security")
        options.add_argument("--headless")
        options.add_argument("--disable-gpu")
        options.add_argument("--log-level=1")
        self.__driver = webdriver.Chrome(options=options)
        self.__driver.get('http://localhost:5173')
        self.__calculator_ui = CalculatorUI(self.__driver)
    
    def tearDown(self):
        self.__driver.quit()

    def test_ADD_positive_numbers(self):
        number1 = 11
        number2 = 12
        operator = '+'
        expected_value = 23

        self.__calculator_ui.enter_number(number1)
        self.__calculator_ui.enter_operator(operator)
        self.__calculator_ui.enter_number(number2)
        self.__calculator_ui.click_equal()
        time.sleep(2)

        current_value = int(self.__calculator_ui.get_result())
        self.assertEqual(expected_value, current_value)

    def test_ADD_negative_numbers(self):
        number1 = 5
        number2 = 7
        operator = '+'
        invertSign = '+-'
        expected_value = -12

        self.__calculator_ui.enter_number(number1)
        self.__calculator_ui.enter_operator(invertSign)
        self.__calculator_ui.enter_operator(operator)
        self.__calculator_ui.enter_number(number2)
        self.__calculator_ui.enter_operator(invertSign)
        self.__calculator_ui.click_equal()
        time.sleep(2)

        current_value = int(self.__calculator_ui.get_result())
        self.assertEqual(expected_value, current_value)

    def test_SUBTRACT_positive_numbers(self):
        number1 = 15
        number2 = 7
        operator = '-'
        expected_value = 8

        self.__calculator_ui.enter_number(number1)
        self.__calculator_ui.enter_operator(operator)
        self.__calculator_ui.enter_number(number2)
        self.__calculator_ui.click_equal()
        time.sleep(2)

        current_value = int(self.__calculator_ui.get_result())
        self.assertEqual(expected_value, current_value)
    
    def test_DIVIDE_positive_numbers(self):
        number1 = 54
        number2 = 6
        operator = '/'
        expected_value = 9

        self.__calculator_ui.enter_number(number1)
        self.__calculator_ui.enter_operator(operator)
        self.__calculator_ui.enter_number(number2)
        self.__calculator_ui.click_equal()
        time.sleep(2)

        current_value = int(self.__calculator_ui.get_result())
        self.assertEqual(expected_value, current_value)

    def test_MULTIPLY_positive_numbers(self):
        number1 = 8
        number2 = 7
        operator = 'X'
        expected_value = 56

        self.__calculator_ui.enter_number(number1)
        self.__calculator_ui.enter_operator(operator)
        self.__calculator_ui.enter_number(number2)
        self.__calculator_ui.click_equal()
        time.sleep(2)

        current_value = int(self.__calculator_ui.get_result())
        self.assertEqual(expected_value, current_value)

# class TestAdd(unittest.TestCase):
#     def setUp(self):
#         options = webdriver.ChromeOptions()
#         options.add_argument("--disable-web-security")
#         options.add_argument("--headless")
#         options.add_argument("--disable-gpu")
#         options.add_argument("--log-level=1")
#         self.__driver = webdriver.Chrome(options=options)
#         self.__driver.get('https://testpages.eviltester.com/styled/calculator')
#         self.__calculator_page = CalculatorUI(self.__driver)
    
#     def tearDown(self):
#         self.__driver.quit()
    
#     def test_add_positive_numbers(self):
#         num1 = 5
#         num2 = 7
#         excepted_value = 12

#         self.__calculator_page.enter_number1(num1)
#         self.__calculator_page.enter_number2(num2)
#         self.__calculator_page.select_operator('plus')
#         self.__calculator_page.click_calculate()

#         current_value = int(self.__calculator_page.get_answer())
#         self.assertEqual(excepted_value, current_value)


if __name__ == '__main__':
    unittest.main()