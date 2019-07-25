import React, { useState, useEffect } from 'react';
import { List,Avatar,Input,Button } from 'antd';
 export default function Lists(props){
    const [count,setCount]=useState(0);
    useEffect(()=>{
      document.title=`you clicked ${count} times`
    })
    const [InputVal,setInputVal]=useState('');
    return(
      <div>
        <Input onChange={(e)=>{setInputVal(e.target.value)}} placeholder="请输入相应的添加信息"/>
        <Button type="primary" onClick={()=>{setCount(count+1);props.addList(InputVal)}}>V1.1提交</Button>
        <hr/>
        <List
          itemLayout="horizontal"
          dataSource={props.lists}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar onClick={()=>{props.delList(item.id)}} size={50} icon="user" />}
                title={<a href="https://ant.design">{item.content}</a>}
<<<<<<< HEAD
                description="这是对于SourceTree的测试！"
=======
                description="这里是具体评论吧！"
>>>>>>> GoodFunction
              />
            </List.Item>
          )}
        />
      </div>
    )
}
