import { createRef, useEffect, useState, useImperativeHandle } from 'react';
import { Tag, Input } from 'antd';
import { TweenOneGroup } from 'rc-tween-one';
import { PlusOutlined } from '@ant-design/icons';


export default function TagSetter(props={tags: []}) {
    const [tags, setTags] = useState(['tag3'])
    const [inputVisible, setInputVisible] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const input = createRef()

    function getTags(){
        return [...tags]
    }

     // @ts-ignore
    useImperativeHandle(props.onRef, () => {
        return {
          getTags: getTags,
        };
    });

    useEffect(()=>{
        if(props.tags!==undefined){
            setTags(props.tags)
        }
    }, [props.tags])

    // @ts-ignore
    const handleClose = (removedTag) => {
        let tags_ = tags.filter(tag => tag !== removedTag);
        setTags(tags_)
    }

    const showInput = () => {
        setInputVisible(true)
    };

    useEffect(() => {
        if (input.current) {
            // @ts-ignore
            input.current.focus()
        }
    }, [inputVisible])

    // @ts-ignore
    const handleInputChange = e => {
        setInputValue(e.target.value)
    };

    const handleInputConfirm = () => {
        let tags_ = [...tags]
        if (inputValue && tags_.indexOf(inputValue) === -1) {
            tags_ = [...tags_, inputValue];
        }
        setTags(tags_)
        setInputVisible(false)
        setInputValue('')
    };


    // @ts-ignore
    const forMap = tag => {
        const tagElem = (
            <Tag
                closable
                onClose={e => {
                    e.preventDefault();
                    handleClose(tag)
                    //   this.handleClose(tag);
                }}
            >
                {tag}
            </Tag>
        );
        return (
            <span key={tag} style={{ display: 'inline-block' }}>
                {tagElem}
            </span>
        );
    };

    const tagChild = tags.map(forMap);
    return (
        <>
            <div style={{ marginBottom: 16 }}>
                <TweenOneGroup
                    enter={{
                        scale: 0.8,
                        opacity: 0,
                        type: 'from',
                        duration: 100,
                    }}
                    // @ts-ignore
                    onEnd={e => {
                        if (e.type === 'appear' || e.type === 'enter') {
                            // @ts-ignore
                            e.target.style = 'display: inline-block';
                        }
                    }}
                    leave={{ opacity: 0, width: 0, scale: 0, duration: 200 }}
                    appear={false}
                >
                    {tagChild}
                </TweenOneGroup>
            </div>
            {inputVisible && (
                <Input
                    // @ts-ignore
                    ref={input}
                    type="text"
                    size="small"
                    style={{ width: 78 }}
                    value={inputValue}
                    onChange={handleInputChange}
                    onBlur={handleInputConfirm}
                    onPressEnter={handleInputConfirm}
                />
            )}
            {!inputVisible && (
                <Tag onClick={showInput} style={{background: '#fff', borderStyle: "dashed"}}>
                    <PlusOutlined /> New Tag
                </Tag>
            )}
        </>
    )
}

