/*const React  = require("react");
const { Component } = require("react");

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Все'
                },
                {
                    key: 'beauty',
                    name: 'Салоны красоты'
                },
                {
                    key: 'food',
                    name: 'Вся еда'
                },
                {
                    key: 'health',
                    name: 'Медцентры'
                },
                {
                    key: 'other',
                    name: 'Интересное'
                },
                {
                    key: 'rest',
                    name: 'Развлечения'
                },
                {
                    key: 'sport',
                    name: 'Здоровье и спорт'
                }
            ]
        }
    }
    render() {
        return (
            <div className='categories'>
                {this.state.categories.map(el => (
                    <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}> {el.name}

                    </div>
                ))}
            </div>
        )
    }
}

module.exports = Categories;
*/
