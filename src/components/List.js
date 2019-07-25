import React, { useState, useEffect } from 'react';
import { List,Avatar,Input,Button } from 'antd';
 export default function Lists(props){
    const [count,setCount]=useState(0);
    useEffect(()=>{
      document.title=`you clicked ${count} times`
    })
    const [InputVal,setInputVal]=useState('');
    const
    return(
      <div>
        <Input onChange={(e)=>{setInputVal(e.target.value)}} placeholder="我是紧急任务的修改语句"/>
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
                description="这里是具体评论"
              />
            </List.Item>
          )}
        />
      </div>
    )
}
