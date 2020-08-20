import React, { useState, useRef } from 'react';
import Layout from '../components/Layout';
import { DraftailEditor } from "draftail";
import { EditorState } from "draft-js";
import createInlineToolbarPlugin from "draft-js-inline-toolbar-plugin";
import createSideToolbarPlugin from "draft-js-side-toolbar-plugin";

import "draft-js/dist/Draft.css";
import "draftail/dist/draftail.css";
import "draft-js-inline-toolbar-plugin/lib/plugin.css";
import "draft-js-side-toolbar-plugin/lib/plugin.css";


const inlineToolbarPlugin = createInlineToolbarPlugin();
const { InlineToolbar } = inlineToolbarPlugin;
const sideToolbarPlugin = createSideToolbarPlugin();
const { SideToolbar } = sideToolbarPlugin;

const plugins = [inlineToolbarPlugin, sideToolbarPlugin];
export default function CreatePost() {

  const editor = useRef(null);


  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );

  return (
    <Layout>
        <DraftailEditor
          editorState={editorState}
          onChange={setEditorState}
          placeholder="Tell your story..."
          plugins={plugins}
          ref={editor}
        />
        <InlineToolbar />
        <SideToolbar />
    </Layout>
  )
}