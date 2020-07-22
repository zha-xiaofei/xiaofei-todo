## 用什么获取到用户的输入值
v-model ,监听用户输入，自动更新data
## 用什么数据类型保存用户的输入
一个对象的属性，例如 current_input.title 
因为：用户输入的信息，可能不止一项数据，
例如，用户还会对当前的信息设置提醒项，还会设置是否已完成，等等。
而当前的输入，只是整个信息的一部分而已，所以用一个对象存用户数据，而当前输入值是该对象的一个属性

## 新增todo及保存todo
每一条todo都是一个对象 todo: {title:xxx}
将todo保存到 数组里面，因为，每一条todo和todo都是平行的关系，todo_list :[todo1,todo2,.....]
新增todo,就是 push到数组 todo_list

注意点：因为current_input 是对象，所以不能直接将这个对象push进去，而应该克隆一份，push这个克隆的数据
1.克隆对象


细节点：
1. 按下回车键也可以添加,在input上使用按键修饰符，即监听键盘事件：v-on:keyup.enter = add_todo
2. 添加后需要情况当前的输入框的值 即使 current = {}




## 如何显示到页面上
取数据，展示到页面，即 迭代 todo_list v-for指令迭代


待研究的：
1. 对象的拷贝