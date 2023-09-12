//./components/Editor
import React, { memo, useEffect, useRef } from "react";
import EditorJS, { OutputData } from "@editorjs/editorjs";

import Embed from '@editorjs/embed'
// import Table from '@editorjs/table'
import List from '@editorjs/list'
import Warning from '@editorjs/warning'
import Code from '@editorjs/code'
import LinkTool from '@editorjs/link'
import ImageTool from '@editorjs/image'
import Raw from '@editorjs/raw'
import Header from '@editorjs/header'
import Quote from '@editorjs/quote'
import Marker from '@editorjs/marker'
import CheckList from '@editorjs/checklist'
import Delimiter from '@editorjs/delimiter'
import InlineCode from '@editorjs/inline-code'
// import SimpleImage from '@editorjs/simple-image'
import { ToolSettings } from '@editorjs/editorjs'

const EDITOR_TOOLS = {
    embed: Embed as ToolSettings,
    // table: Table as ToolSettings,
    marker: Marker as ToolSettings,
    list: List as ToolSettings,
    warning: Warning as ToolSettings,
    code: Code as ToolSettings,
    linkTool: LinkTool as ToolSettings,
    image: ImageTool,
    raw: Raw as ToolSettings,
    header: Header as ToolSettings,
    quote: Quote as ToolSettings,
    checklist: CheckList as ToolSettings,
    delimiter: Delimiter as ToolSettings,
    inlineCode: InlineCode as ToolSettings,
    // simpleImage: SimpleImage,
}

//props
type Props = {
    data?: OutputData | undefined;
    onChange(val: OutputData): void;
    holder: string;

};

const EditorBlock = ({ data, onChange, holder }: Props) => {
    //add a reference to editor
    const ref = useRef<EditorJS>();

    //initialize editorjs
    useEffect(() => {
        //initialize editor if we don't have a reference
        if (!ref.current) {
            const editor = new EditorJS({
                holder: holder,
                tools: EDITOR_TOOLS,
                data,
                async onChange(api, event) {
                    const data = await api.saver.save();
                    onChange(data);
                },
            });
            ref.current = editor;
        }

        //add a return function handle cleanup
        return () => {
            if (ref.current && ref.current.destroy) {
                ref.current.destroy();
            }
        };
    }, []);


    return <div id={holder} />

};

export default memo(EditorBlock);
