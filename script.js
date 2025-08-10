const { DateTime } = luxon;

class calendarCalculator
{
    constructor()
    {
        this.isVisible = false;
        this.currentDate = new Date();
        this.selectedDate = null;
        this.savedDate = null;
        this.calendarIcon = document.getElementById('calendar-icon');
        this.calendarDrop = document.querySelector('.calendar-dropdown');
        this.dateResult = document.getElementById('month-year');
        this.prevMonth = document.getElementById('prev-month');
        this.nextMonth = document.getElementById('next-month');
        this.calendarDays = document.getElementById('calendar-days')
        this.input = document.getElementById('age-input');
        this.resultat = document.querySelector('.resultat');


        this.initCalendar();
    }


    initCalendar()
    {
        this.setupEvents();
        this.renderCalendar();
    }
    setupEvents()
    {
        this.calendarIcon.addEventListener('click', (e) =>
        {
            e.stopPropagation();
            this.toggleCalendar()
        })

        this.prevMonth.addEventListener('click', () =>
        {
            this.currentDate.setMonth(this.currentDate.getMonth() - 1)
            this.calendarDays.innerHTML = ''
            this.renderCalendar()

        })


        this.nextMonth.addEventListener('click', () =>
            {
                this.currentDate.setMonth(this.currentDate.getMonth() + 1)
                this.calendarDays.innerHTML = ''
                this.renderCalendar()

        })

        document.addEventListener('click', (e) =>
        {
            if (e.target != this.calendarIcon && !this.calendarDrop.contains(e.target))
                this.hideCalendar();
        });



        this.input.addEventListener('change', () =>
        {
            this.savedDate = this.input.value;
            if (this.valideDate(this.savedDate) == true)
                this.calculate();

        })
    }


    valideDate(date)
    {
        const formatt = /^\d{2}\/\d{2}\/\d{4}$/;

        if (!formatt.test(date))
            return false;

        return true;
    }

    toggleCalendar()
    {
        if (this.isVisible)
            this.hideCalendar();
        else
            this.showCalendar();
    }

    showCalendar()
    {
        this.calendarDrop.style.display = 'block'
        this.isVisible = true;
    }

    hideCalendar()
    {
        this.calendarDrop.style.display = 'none'
        this.isVisible = false;
    }

    renderCalendar()
    {
        const year = this.currentDate.getFullYear();
        const month = this.currentDate.getMonth();

        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];

        this.dateResult.textContent = `${monthNames[month]} ${year}`;

        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const daysInPrevMonth = new Date(year, month, 0).getDate();


        //    previous days
        for (let i = firstDay - 1; i >= 0 ; i--)
        {
            const dayElement = this.createDayElement(daysInMonth - i, false)
            this.calendarDays.appendChild(dayElement);
        }

        // current month
        for (let j = 1; j <= daysInMonth; j++)
        {
            const dayElement = this.createDayElement(j, true);
            this.calendarDays.appendChild(dayElement);
        }


        const totalCells = this.calendarDays.children.length;
        const remainingCells = 42 - totalCells; // dimension of the calendar is 7 * 6
        for (let k = 1; k <= remainingCells ; k++)
        {
            const dayElement = this.createDayElement(k, false)
            this.calendarDays.appendChild(dayElement)
        }
    }

    createDayElement(day, isInMonth)
    {
        const dayElement = document.createElement('div');
        dayElement.className = 'day';
        dayElement.textContent = day;

        if (!isInMonth)
        {
            dayElement.classList.add('other-month');
        }
        else
        {
            const today = new Date();
            if (day === today.getDate() && this.currentDate.getMonth() === today.getMonth() && this.currentDate.getFullYear() === today.getFullYear())
                dayElement.classList.add('today');

            dayElement.addEventListener('click', () =>
            {
                const thatMoment = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), day);
                const a = thatMoment.getDate().toString().padStart(2, '0');
                const b = (thatMoment.getMonth() + 1).toString().padStart(2, '0');
                const c = thatMoment.getFullYear().toString();

                this.input.value = `${a}/${b}/${c}`;


                this.savedDate = this.input.value;
                this.selectedDate = thatMoment;

                this.hideCalendar();

                this.calculate();
            });
        }
        return dayElement;
    }



    calculate()
    {

        // if (!this.selectedDate && !this.savedDate)
        //     return

        const [day, month, year] = this.savedDate.split('/');

        const birthday = DateTime.fromObject({

            year: parseInt(year),
            month: parseInt(month),
            day: parseInt(day)
        })

        const now = DateTime.now()

        const diff = now.diff(birthday, ['years', 'months', 'days']);

        const yourAge = document.querySelector('.calculate');

        yourAge.addEventListener('click', () =>
        {
            this.resultat.textContent = `${Math.floor(diff.years)} years ${Math.floor(diff.months % 12)} months`;
        })

    }
}




document.addEventListener('DOMContentLoaded', () =>
{
    new calendarCalculator();


    const calendarIcon = document.getElementById('calendar-icon')
    const calendarDrop = document.querySelector('.calendar-dropdown');
    const calculate = document.querySelector('.calculate');

    calculate.addEventListener('click', function(e)
    {
        e.preventDefault();
    })
});
