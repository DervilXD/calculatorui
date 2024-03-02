import { useState } from "react";
import { BUTTON_VALUES } from "../constants/buttonValues";
import Button from "./Button";
import ButtonBox from "./ButtonBox";
import Screen from "./Screen";
import Wrapper from "./Wrapper";
import { isNotNumberOrPeriod } from "../utils/numberUtil";
import { OPERATION_LOOK_UP } from "../constants/operationSigns";
import { calculateApi } from "../services/calculatorService";

function Calculator() {
    const [calculate, setCalculate] = useState({
        sign: "",
        number: 0,
        previousNumber: 0,
    })

    const resetClickHandler = () => {
        setCalculate({ sign: "", number: 0, previousNumber: 0 })
    }

    const handleNumber = (value) => {
        if(calculate.number.toString().length <= 160) {
            setCalculate({ 
                ...calculate,
                 number: 
                    calculate.number === 0 && value === "0"
                    ? "0"
                    : calculate.number === 0
                    ? Number(calculate.number + value)
                    : calculate.number + value,
                 previousNumber: !calculate.sign ? 0 : calculate.previousNumber
            })
        }
    }

    const handleComma = (value) => {
        setCalculate({
            ...calculate,
            number: !calculate.number.toString().includes(".") ? calculate.number + value : calculate.number
        })
      };

    const invertClickHandler = () => {
        setCalculate({
            ...calculate,
            number: calculate.number ? calculate.number * -1 : 0,
        })
      }

    const handleSign = (value) => {
        if(["+", "-", "X", "/"].includes(value)) {
            setCalculate({
                ...calculate,
                sign: value,
                previousNumber: !calculate.previousNumber && calculate.number ? calculate.number : calculate.previousNumber,
                number: 0,
            })
        } else if (value === "=") {
            const apiOperation = OPERATION_LOOK_UP[calculate.sign]
            calculateApi(calculate.previousNumber, calculate.number, apiOperation)
                        .then(operationResult => {
                            setCalculate({ ...calculate, number: operationResult, previousNumber: 0, sign: ""})
                        })
                        .catch(error => {
                            console.error('Error calculating:', error)
                        })
        } else if (value === "C") {
            resetClickHandler()
        } else if (value === "+-") {
            invertClickHandler()
        }
    }

    return (
        <Wrapper>
            <Screen value={calculate.number ? calculate.number : calculate.previousNumber} />
            <ButtonBox>
            {
                BUTTON_VALUES.flat().map((btn, i) => {
                    return (
                        <Button
                            key={i}
                            className={btn === "=" ? "equals" : "" }
                            value={btn.toString()}
                            onClick={(event) => {
                                event.preventDefault()
                                isNotNumberOrPeriod(btn)
                                    ? handleSign(btn)
                                    : btn === "."
                                    ? handleComma(btn)
                                    : handleNumber(btn.toString())
                                }  
                            } 
                        />
                    )
                })
            }
            </ButtonBox>
        </Wrapper>
    )
}

export default Calculator