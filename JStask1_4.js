'use strict';

const showTitle = () => {
    console.log('=====================');
    console.log('現在持っているタスクの一覧');
    console.log('=====================');
}

const tasks = {
    '机を片付ける':'掃除',
    '牛乳を買う':'買い物',
    '散歩する':'運動',

};

const entries = Object.entries(tasks);

entries.forEach((prop) => {
    console.log(`${prop[0]} : ${prop[1]}`);
});











// const listUp = () => {
//     for (let i = 0; i < tasks.length; i++) {
//         console.log(i + '：' + tasks[i]);
//     }
// }

// showTitle();
// listUp();

// tasks.push(prompt('タスクを入力してください'));

// showTitle();
// listUp();