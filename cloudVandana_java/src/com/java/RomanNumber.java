package com.java;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class RomanNumber 
{
	public static int romanNumber(String text)
	{
		Map<Character, Integer> map = new HashMap<>();
		map.put('I', 1);
		map.put('V', 5);
		map.put('X', 10);
		map.put('L', 50);
		map.put('C', 100);
		map.put('D', 500);
		map.put('M', 1000);
		
		int result = 0;
		for(int i=0;i<text.length();i++)
		{
			if(i>0 && map.get(text.charAt(i)) > map.get(text.charAt(i-1)))
			{
				result += map.get(text.charAt(i)) - 2*map.get(text.charAt(i-1));
			}else {
				result += map.get(text.charAt(i));
			}
		}
		return result;
	}
	
	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter a roman_latter: ");
		String text = sc.nextLine();
		System.out.println(romanNumber(text));	
	}
}
