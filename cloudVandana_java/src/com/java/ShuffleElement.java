package com.java;

import java.util.Random;

public class ShuffleElement 
{
	public static void shuffleElement(int a[])
	{
		Random r = new Random();
		
		for(int i=a.length-1;i>0;i--)
		{
			int x = r.nextInt(a.length);
			
			int temp = a[i];
			a[i] = a[x];
			a[x] = temp;
		}
	}
	
	public static void main(String[] args) {
		
		int a[] = {1,2,3,4,5,6,7};
	
		shuffleElement(a);
		
		for(int i=0;i<a.length;i++)
		{
			System.out.print(a[i]+" ");
		}
	}
}