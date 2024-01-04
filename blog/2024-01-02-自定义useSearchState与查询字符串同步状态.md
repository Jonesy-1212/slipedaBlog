---
slug: 自定义useSearchState与查询字符串同步状态
title: 自定义useSearchState与查询字符串同步状态
authors: [Slipeda]
description: 自定义useSearchState与查询字符串同步状态
tags: [前端, React]
---

<!-- truncate -->

```
import { useState, useEffect } from "react";

function useSearchState<T>(key: string, init?: T) {
  const searchParams = new URLSearchParams(window.location.search);
  let initValue = searchParams.get(key) || "";

  try {
    JSON.parse(initValue); // 尝试解析查询字符串中的值
  } catch (e) {
    if (init !== undefined) {
      initValue = JSON.stringify(init); // 如果解析错误，使用init的格式化后的值
    } else {
      initValue = ""; // 如果init也没有，初始化为空字符串
    }
  }

  const [params, setParams] = useState<T>(() => {
    return JSON.parse(initValue) as T;
  });

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(key, JSON.stringify(params));
    const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
    window.history.replaceState({}, "", newUrl);
  }, [params, key]);

  return [params, setParams] as const;
}

export default useSearchState;
```