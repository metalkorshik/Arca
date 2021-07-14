<?php

namespace App\Traits;

trait Filter
{
    public static function filter($rules, $data, $query)
    {
        $conditionsCount = 0;

        if(isset($data['filters']))
        {
            if(isset($data['filters']['common']))
            {
                foreach ($rules as $key => $rule) 
                    if(isset($rule['is_common_search']) && $rule['is_common_search'])
                        $data['filters'][$key] = $data['filters']['common'];
            }

            foreach ($data['filters'] as $filter => $param) {
                if (isset($rules[$filter]) && $param) {
                    $data = $rules[$filter];
                    if (isset($data['type']) && $data['type'] == 'array') {
                        if ($data['is_relation']) {
                            $query->whereHas($data['relation'], function ($query) use ($param, $data) {
                                $query->where(function ($query) use ($param, $data) {
                                    foreach ($param as $i => $value) {
                                        if ($i == 0) {
                                            self::addCondition($query, $data['key'], $data['cond'], $value, $conditionsCount);
                                        } else {
                                            self::addCondition($query, $data['key'], $data['cond'], $value, $conditionsCount);
                                        }
                                    }
                                });
                            });
                        } else {
                            $query->where(function ($query) use ($param, $data) {
                                foreach ($param as $i => $value) {
                                    self::addCondition($query, $data['key'], $data['cond'], $value, $conditionsCount);
                                }
                            });
                        }
                    } else {
                        if (isset($data['is_relation']) && $data['is_relation']) {
                            $param = isset($data['s']) ? "{$data['s'][0]}$param{$data['s'][1]}" : $param;
                            if (isset($data['value']))
                                $param = $data['value'];
                            $query->whereHas($data['relation'], function ($query) use ($param, $data) {
                                if(isset($data['is_name']) && $data['is_name'])
                                    self::addNameCondition($query, $data, $param, $conditionsCount);
                                else
                                    self::addCondition($query, $data['key'], $data['cond'], $param, $conditionsCount);
                            });
                        } else if(isset($data['is_name']) && $data['is_name']) {
                            self::addNameCondition($query, $data, $param, $conditionsCount);
                        } else {
                            if(isset($data['allowed_values']) && !in_array($param, $data['allowed_values']))
                                continue;
                            
                            if(isset($data['is_months_filter']) && $data['is_months_filter'])
                                $param = date('Y-m-d', strtotime("-$param months"));

                            if(isset($data['is_date']) && $data['is_date'])
                                $param = self::getSqlDateFilter($param);

                            $param = isset($data['s']) ? "{$data['s'][0]}$param{$data['s'][1]}" : $param;
                            if (isset($data['value']))
                                $param = $data['value'];

                            $isRequired = isset($data['is_common_search']) ? !$data['is_common_search'] : true;
                            self::addCondition($query, $data['key'] ?? $filter, $data['cond'] ?? '=', $param, $conditionsCount, $isRequired);
                        }
                    }
                }
            }
        }

        return $query;
    }

    public static function addNameCondition(&$query, $data, $param, &$count)
    {
        $param = trim($param);
        $words = explode(' ', $param);

        $wordsOrders = [ [0, 1, 2], [1, 2, 0], [2, 1, 0] ];

        for ($i=0; $i < count($wordsOrders); $i++) { 
            for ($j=0; $j < count($words); $j++) { 
                $search = "%{$words[$j]}%";
                $isRequired = isset($data['is_common_search']) ? $data['is_common_search'] && $j != 0 : false;
                self::addCondition($query, $data['keys'][$wordsOrders[$i][$j]], $data['cond'] ?? '=', $search, $count, $isRequired);
            }
        }
    }

    public static function addCondition($query, $key, $condition, $value, &$count, $isRequired = false)
    {
        if($count > 0 && !$isRequired)
            $query->orWhere($key, $condition, $value);
        else
            $query->where($key, $condition, $value);

        ++$count;
    }

    public static function getSqlDateFilter($date, $delitimer = '/', $connector = '.')
    {   
        $result = explode($delitimer, $date);
        return count($result) > 2 ? "{$result[2]}$connector{$result[1]}$connector{$result[0]}" : $date;
    }

    public static function dumpQuery($query)
    {
        $res = str_replace(array('?'), array('\'%s\''), $query->toSql());
        $res = vsprintf($res, $query->getBindings());
        var_dump($res);
        exit;
    }
}