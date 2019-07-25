import React, { useState, useEffect } from 'react';
import { List,Avatar,Input,Button } from 'antd';
 export default function Lists(props){
    const [count,setCount]=useState(0);
    useEffect(()=>{
<<<<<<< Updated upstream
      document.title=`你点击了 ${count} 次`
=======
      document.title=`${count}为你点击的次数`
>>>>>>> Stashed changes
    })
    const [InputVal,setInputVal]=useState('');
    return(
      <div>
        <h1>'123'</h1>
        <Input onChange={(e)=>{setInputVal(e.target.value)}} placeholder="请输入相应的添加信息"/>
        <Button type="primary" onClick={()=>{setCount(count+1);props.addList(InputVal)}}>提交</Button>
        <hr/>
        <List
          itemLayout="horizontal"
          dataSource={props.lists}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar onClick={()=>{props.delList(item.id)}} size={50} icon="user" />}
                title={<a href="https://ant.design">{item.content}</a>}
                description="这里是具体评论吧！"
              />
            </List.Item>
          )}
        />
      </div>
    )
}
