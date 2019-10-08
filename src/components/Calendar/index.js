
import * as React from 'react';
import {
    Container,
    Table,
    TableHeader,
    LeftArrow,
    RightArrow,
    BigDate,
    Week,
    Day,
    DaySelect,
} from './styles';

const WEEK_NAMES = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
const LINES = [1, 2, 3, 4, 5, 6]
const MONTH_DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

export default class Calendar extends React.Component {
    state = {
        month: 0,
        year: 0,
        currentDate: new Date(),
    }

    componentWillMount() {
        this.setCurrentYearMonth(this.state.currentDate)
    }

    setCurrentYearMonth(date) {
        var month = Calendar.getMonth(date)
        var year = Calendar.getFullYear(date)
        this.setState({
            month,
            year
        })
    }

    static getMonth(date) {
        return date.getMonth()
    }

    static getFullYear(date) {
        return date.getFullYear()
    }

    static getCurrentMonthDays(month) {
        return MONTH_DAYS[month]
    }

    static getWeeksByFirstDay(year, month) {
        var date = Calendar.getDateByYearMonth(year, month)
        return date.getDay()
    }

    static getDayText(line, weekIndex, weekDay, monthDays) {
        var number = line * 7 + weekIndex - weekDay + 1
        if (number <= 0 || number > monthDays) {
            return false
        }

        return number
    }

    static formatNumber(num) {
        var _num = num + 1
        return _num < 10 ? `0${_num}` : `${_num}`
    }

    static getDateByYearMonth(year, month, day = 1) {
        var date = new Date()
        date.setFullYear(year)
        date.setMonth(month, day)
        return date
    }

    checkToday(line, weekIndex, weekDay, monthDays) {
        var { year, month } = this.state
        var day = Calendar.getDayText(line, weekIndex, weekDay, monthDays)
        var date = new Date()
        var todayYear = date.getFullYear()
        var todayMonth = date.getMonth()
        var todayDay = date.getDate()

        return year === todayYear && month === todayMonth && day === todayDay
    }

    checkSmallToday(line, weekIndex, weekDay, monthDays) {
        var { year, month } = this.state
        var day = Calendar.getDayText(line, weekIndex, weekDay, monthDays)
        var date = new Date()
        var todayYear = date.getFullYear()
        var todayMonth = date.getMonth()
        var todayDay = date.getDate()
        if (year < todayYear) {
            return true
        } else if (year <= todayYear && month < todayMonth) {
            return true
        } else if (year == todayYear && month == todayMonth && day < todayDay) {
            return true
        } else {
            return false
        }
    }

    monthChange(monthChanged) {
        var { month, year } = this.state
        var monthAfter = month + monthChanged
        var date = Calendar.getDateByYearMonth(year, monthAfter)
        this.setCurrentYearMonth(date);
    }

    render() {
        const { year, month } = this.state

        const monthDays = Calendar.getCurrentMonthDays(month)
        const weekDay = Calendar.getWeeksByFirstDay(year, month)
        const SelectDay = (key, index, weekDay, monthDays) => {
            this.props.selectDate(year, month + 1, Calendar.getDayText(key, index, weekDay, monthDays));
        }
        return (
            <Container
                side={this.props.side}
                onClick={(e) => e.stopPropagation()}
            >
                <TableHeader>
                    <LeftArrow
                        onClick={(e) => { this.monthChange.bind(this, -1)() }}
                    >
                        &#60;
                    </LeftArrow>
                    <BigDate>{year} - {Calendar.formatNumber(month)}</BigDate>
                    <RightArrow
                        onClick={(e) => { this.monthChange.bind(this, 1)() }}
                    >
                        &gt;
                    </RightArrow>
                </TableHeader>
                <Table>
                    <thead>
                        <tr>
                            {
                                WEEK_NAMES.map((week, key) => {
                                    return <Week key={key}>{week}</Week>
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            LINES.map((l, key) => {
                                return <tr key={key}>
                                    {
                                        WEEK_NAMES.map((week, index) => {
                                            return <Day
                                                key={index}
                                                style={{
                                                    color: this.checkToday(key, index, weekDay, monthDays) ? '#455A64' : this.checkSmallToday(key, index, weekDay, monthDays) ? '#D7CCC8' : '#7395a5',
                                                    transform: this.checkToday(key, index, weekDay, monthDays) ? 'scale(1.1)' : 'none',
                                                }}
                                            >
                                                {Calendar.getDayText(key, index, weekDay, monthDays) &&
                                                    <DaySelect
                                                        hover={!this.checkSmallToday(key, index, weekDay, monthDays)}
                                                        onClick={() => {
                                                            !this.checkSmallToday(key, index, weekDay, monthDays) ?
                                                                SelectDay(key, index, weekDay, monthDays) : ''
                                                        }
                                                        }
                                                    >{
                                                            Calendar.getDayText(key, index, weekDay, monthDays)}
                                                    </DaySelect>}
                                            </Day>
                                        })
                                    }
                                </tr>
                            })
                        }
                    </tbody>
                </Table>
            </Container>)
    }
}